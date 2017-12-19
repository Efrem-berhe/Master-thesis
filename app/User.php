<?php

namespace App;
use App\Contacts;
use Illuminate\Support\Facades\Auth;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use Notifiable;
    use EntrustUserTrait;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'avatar','point',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function contacts(){
      return $this->hasMany('App\Contacts');

    }

    public function addContact($permission, $role, $contact_id){

       $user = Auth::user();
       $contact=new \App\Contacts;
       $contact->contact_id = $contact_id;
       $contact->user_id = $user->id;
       $contact->permission= $permission;
       $contact->role=$role;
       $contact->save();

       $update_user_role = \App\User::where('id',$contact_id)->first();
       $role =\App\Role::where('id',$role)->first();
       $update_user_role->role=$role->name;
       $update_user_role->save();
    // return $contact=\App\Contacts::create([
    //       'role'=>$role,
    //        'contact_id'=>$contact_id,
    //
    //        'user_id'=>$this->id,
    //      ]);

    return $contact;
    }

    public function updateContact($permission, $role, $contact_id){
      $user = Auth::user();
      $contact = $user->contacts()->where('contact_id',$contact_id)->first();
      $contact->permission= $permission;
      $contact->role=$role;
      $contact->save();

      $update_user_role = \App\User::where('id',$contact_id)->first();
      $role =\App\Role::where('id',$role)->first();
      $update_user_role->role=$role->name;
      $update_user_role->save();

      return $contact;
    }
//one to many
    public function roles(){
      return $this->belongsToMany('App\Role');
    }

//check if user what type of role he have
    public function hasAnyRole($roles){

      if(is_array($roles)){
        foreach ($roles as $role) {
          if($this->hasRole($role)){
            return true;
          }
        }
      }else{
        if($this->hasRole($roles)){
          return true;
        }
      }

      return false;
    }

    public function hasRole($role){

      if($this->roles()->where('name',$role)->first())
      {
        return true;
      }
      return false;
    }

    // public function contacts(){
    //
    //   return $this->hasMany('App\Contacts');
    //
    // }

    public function responses()
    {
        return $this->hasMany('App\Response');
    }

    public function surveys()
    {
        return $this->belongsToMany('App\Survey')->withTimestamps()->withPivot('id');
    }

    //many to many
    public function achievements()
    {
        return $this->belongsToMany('App\Achievement')->withPivot('complete_rate','is_achieved')->withTimestamps();
    }

    // public function addContact($contact_id){
    //
    //     $user = Auth::user();
    //
    //     Contacts::create([
    //       'contact_id'=>$contact_id,
    //       'user_id'=>$user->id,
    //     ]);
    //
    // }

    public function getSurveyResult()
    {
        $result['resultEachCategoryByHour']=$this->getResultEachCategoryByHour();
        $result['resultLatestAndOverall']=$this->getRadarChartData();

        return $result;
    }
    public function getResultEachCategoryByHour()
    {
        $responses = \App\Category::select('name')->get();
        //   $responses->each(function ($item, $key){
        //     $item->dataset = \App\Response::select(DB::raw("cast(avg(weight) as decimal(2,1)) as score, date_format( responses.created_at, '%Y-%m-%d %H:00' ) as hour" ))
        //         ->join('questions', 'questions.id', '=', 'responses.question_id')
        //         ->join('categorys', 'categorys.id', '=', 'questions.category_id')
        //         ->join('choices', 'choices.id', '=', 'responses.choice_id')
        //         ->where('user_id', $this->id)
        //         ->whereNotIn('categorys.id', [11])
        //         ->where('categorys.name', $item->name)
        //         ->groupBy('hour')
        //         ->get();
        //   });


        $responses->each(function ($item, $key){

            $item->dataset = \App\Response::select( DB::raw("cast(avg(weight) as decimal(2,1)) as score, date_format( survey_user.created_at, '%Y-%m-%d %H:%i' ) as hour" ))
                ->join('questions', 'questions.id', '=', 'responses.question_id')
                ->join('survey_user', 'survey_user.id', '=', 'responses.survey_user_id')
                ->join('categorys', 'categorys.id', '=', 'questions.category_id')
                ->join('choices', 'choices.id', '=', 'responses.choice_id')
                ->where('responses.user_id', $this->id)
                ->where('categorys.name', $item->name)
                ->whereNotIn('categorys.id', [11])
                ->groupBy('survey_user.id')
                ->groupBy('survey_user.created_at')
                ->get();
        });
        return $responses;
    }
    public function getResultByCatagory(){
        // average score over all time of each category
        $responses = \App\Response::select('name', DB::raw('cast(avg(weight) as decimal(1)) as score'))
            ->join('questions', 'questions.id', '=', 'responses.question_id')
            ->join('categorys', 'categorys.id', '=', 'questions.category_id')
            ->join('choices', 'choices.id', '=', 'responses.choice_id')
            ->where('user_id', $this->id)
            ->whereNotIn('categorys.id', [11])
            ->groupBy('name')
            ->get();

        return $responses;
    }
    public function getRadarChartData(){
        $names = \App\Category::select('name')->whereNotIn('categorys.id', [11])->get();
        $results_a = \App\Response::select('name', DB::raw('cast(avg(weight) as decimal(1)) as score'))
            ->join('questions', 'questions.id', '=', 'responses.question_id')
            ->join('survey_user', 'survey_user.id', '=', 'responses.survey_user_id')
            ->join('categorys', 'categorys.id', '=', 'questions.category_id')
            ->join('choices', 'choices.id', '=', 'responses.choice_id')
            ->where('responses.user_id', $this->id)
            ->whereNotIn('categorys.id', [11])
            ->where('survey_user_id', '=', DB::raw('ANY (SELECT s1.id FROM survey_user s1 LEFT JOIN survey_user s2 ON (s1.survey_id = s2.survey_id AND s1.id < s2.id) WHERE s2.id IS NULL)' ))
            ->groupBy('name')
            ->orderBy('name')
            ->get();
        $results_b =$this->getResultByCatagory();

        $names->each(function ($item, $key) use ($results_a,$results_b){

            $item->score_a=0;
            $item->score_b=0;

            $results_a->each(function($result_item, $key) use($item){

                if($result_item->name === $item->name){
                    $item->score_a = $result_item->score;
                }else{

                }
            });

            $results_b->each(function($result_item, $key) use($item){

                if($result_item->name === $item->name){
                    $item->score_b = $result_item->score;
                }else{

                }
            });
        });

        return  $names;
    }

    public function getPlayerStatus()
    {
        $points = $this->point;
        $level_score = array( );
        for($i=1;$i<51;$i++){
            $nextscore = $i*($i + 2)*10;
            array_push($level_score, array("level"=>$i, "score"=>$nextscore));
        }
        $prev_level = array_last($level_score, function ($value, $key) use($points) {
            return $value["score"] <= $points;
        });
        $current_level = array_first($level_score, function ($value, $key) use($points){
            return $value["score"] > $points ;
        });


        $level['current_level'] = $current_level;
        $level['prev_level'] = $prev_level;


        $max_score = ($level['current_level']['score'] - $level['prev_level']['score']);
        $processed_score =  ($this->point - $level['prev_level']['score']);
        $level_progress['max_score'] = $max_score;
        $level_progress['processed_score'] = $processed_score;
        $PlayerStatus =array(
            'level_progress' => $level_progress,
            'level' => $level['current_level']['level'],
        );
        return $PlayerStatus;
    }

}
