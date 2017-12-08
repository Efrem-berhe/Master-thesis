<?php
use App\Role;
use App\User;

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\DB;

/**
*
* Loading our model
*/

class ContactsController extends Controller
{
  public function __construct()
  {
      $this->middleware('auth');
  }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('pages.contacts');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

      //$user->addContact(request("role"),request("user_id"));

        //get the current user
         //$contact = new \App\Contacts;




         $user = Auth::user();
         $role = $request->input("role");
         $contact_id=$request->input("user_id");
         //$contact = User::where('id', 1)->first();
         //$contact_role = $contact->roles()->first();

         $contact_role = \App\Role::where('name',$role)->select('id')->first();
         //$user->roles()->attach($role);
         $user = $user->addContact($contact_role->id, $contact_id);

         $newContact = \App\User::where('id', $contact_id)->first();
         $newContact->roles()->detach();
         $role_user=\App\Role::where('name',$role)->first();
         $newContact->roles()->attach($role_user);

        //dd($request->input("role"));
         // $contact->role = $request->input("role");
         // $contact->user_id=$user->id;
         // $contact->contact_id=$request->input("user_id");
        //
         //$contact->save();


        //get the new contact user id and role

        //$role = $request->input("role");
      //  $contact_id = $request->input("user_id");

        // $contact = Contacts::create([
        //   'role'=>$role,
        //   'user_id'=>$user->id,
        //   'contact_id'=>$contact_id
        // ]);
      //
      // $contacts->save();

    // $user = User::addContact($role , $userid);
      redirect('/contacts');
      return response()->json($user);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

     public function getnewContact($id)
     {
       //get contact by id
       $contact = \App\User::where('id',$id)->first();


       return response()
            ->json($contact);

     }
    public function show($id)
    {


      $user = Auth::user();
      //get user  role
      $role=$user->roles()->first();
      $user_role = $role->name;

      $users = \App\User::whereNotIn('id', [$user->id])->get();

      //get user contacts
       $contacts = \App\Contacts::where('user_id','=', $user->id)->get();
       $userContacts = $user->contacts();

       //get user respondents
        //$respondents = \App\Contacts::where('contact_id','=', $user->id)->get();

      $respondents = DB::table('users')
      ->join('contacts','users.id','=','contacts.user_id')
      ->where('contacts.contact_id','=',$user->id)->select('users.*')->get();


       $userContacts = DB::table('users')
             ->join('contacts', 'users.id', '=', 'contacts.contact_id')
            ->select('users.*')
            ->where('contacts.user_id','=',$user->id)
            ->get();


      $users = array(
        'users'=>$users,
        'user_role'=>$user_role,
        'contacts'=>$contacts,
        'usersContacts'=>$userContacts,
        'respondents'=>$respondents

      );

      return response()
           ->json($users);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
