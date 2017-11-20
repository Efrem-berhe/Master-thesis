<?php

use Illuminate\Database\Seeder;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      DB::table('questions')->insert([
        ['question'=>"Do you read something and find you haven’t been thinking about it and must read it again?", 'category_id' => 1],
        ['question'=>"Do you find you forget why you went from one part of the house to the other?", 'category_id_id' => 1],
        ['question'=>"Do you fail to notice signposts on the road?", 'category_id' => 1],
        ['question'=>"Do you find you confuse right and left when giving directions?", 'category_id' => 1],
        ['question'=>"Do you bump into people?", 'category_id' => 1],
        ['question'=>"Do you find you forget whether you’ve turned off a light or a fire or locked the door?", 'category_id' => 1],
        ['question'=>"Do you fail to listen to people’s names when you are meeting them?", 'category_id' => 1],
        ['question'=>"Do you say something and realize afterwards that it might be taken as insulting?", 'category_id' => 1],
        ['question'=>"Do you fail to hear people speaking to you when you are doing something else?", 'category_id' => 1],
        ['question'=>"Do you lose your temper and regret it?", 'category_id' => 1],
        ['question'=>"Do you leave important letters unanswered for days?", 'category_id' => 1],
        ['question'=>"Do you find you forget which way to turn on a road you know well but rarely use?", 'category_id' => 1],
        ['question'=>"Do you fail to see what you want in a supermarket (although it’s there)?", 'category_id' => 1],
        ['question'=>"Do you have trouble making up your mind?", 'category_id' => 1],
        ['question'=>"Do you find you forget appointments?", 'category_id' => 1],
        ['question'=>"Do you forget where you put something like a newspaper or a book?", 'category_id' => 1],
        ['question'=>"Do you find you accidentally throw away the thing you want and keep what you meant to throw away – as in the example of throwing away the matchbox and putting the used match in your pocket?", 'category_id' => 1],
        ['question'=>"Do you daydream when you ought to be listening to something?", 'category_id' => 1],
        ['question'=>"Do you find you forget people’s names?", 'category_id' => 1],
        ['question'=>"Do you start doing one thing at home and get distracted into doing something else (unintentionally)?", 'category_id' => 1],
        ['question'=>"Do you find you can’t quite remember something although it’s “on the tip of your tongue”?", 'category_id' => 1],
        ['question'=>"Do you find you forget what you came to the shops to buy?", 'category_id' => 1],
        ['question'=>"Do you drop things?", 'category_id' => 1],
        ['question'=>"Do you find you can’t think of anything to say?", 'category_id' => 1],


         ['question'=>"How do you generally accomplish selecting appropriate food for your meals, according to your taste and particular needs (quantity, type of food)", 'category_id' => 2],
         ['question'=>"How do you generally accomplish preparing your meals (including using electric kitchen appliances)", 'category_id' => 2],
         ['question'=>"How do you generally accomplish eating in restaurants (table service and fast-food)", 'category_id' => 2],

         ['question'=>"How do you generally accomplish getting in and out of bed", 'category_id' => 3],
         ['question'=>"How do you generally accomplish sleep (comfort, duration, continuity, etc)", 'category_id' => 3],
         ['question'=>"How do you generally accomplish participating in physical activities to maintain or improve your physical fitness or health (walking, individual or group exercise)", 'category_id' => 3],
         ['question'=>"How do you generally accomplish participating in relaxation, unwinding, or mental focus activities to ensure your psychological or mental wellbeing (yoga, meditation, person growth, chess, etc)", 'category_id' => 3],

         ['question'=>"How do you generally accomplish attending to your personal hygiene (washing yourself, doing your hair, taking a bath or shower, etc)", 'category_id' => 4],
         ['question'=>"How do you generally accomplish using the bathroom and toilet in your home (and other devices for elimination)", 'category_id' => 4],
         ['question'=>"How do you generally accomplish using a bathroom and toilet other than those in your home (and other devices for elimination)", 'category_id' => 4],
         ['question'=>"How do you generally accomplish dressing and undressing the upper half of your body (clothing, accesories, including the choice of clothes)", 'category_id' => 4],
         ['question'=>"How do you generally accomplish dressing and undressing the lower half of your body (clothing, accessories, including the choice of clothes)", 'category_id' => 4],
         ['question'=>"How do you generally accomplish putting on, removing, and maintaining your assistive devices (orthotics, prosthetics, contact lenses, glasses, etc)", 'category_id' => 4],

         ['question'=>"How do you generally accomplish communication with another person at home or in the community (expressing needs, holding a conversation, etc)", 'category_id' => 5],
         ['question'=>"How do you generally accomplish communicating with a group of people at home or in the community (expressing needs, holding a conversation, etc)", 'category_id' => 5],
         ['question'=>"How do you generally accomplish written communication (writing a letter, message)", 'category_id' => 5],
         ['question'=>"How do you generally accomplish reading and understanding written information (newspaper, books, letters, signs, etc)", 'category_id' => 5],
         ['question'=>"How do you generally accomplish using a phone or mobile phone", 'category_id' => 5],
         ['question'=>"How do you generally accomplish using a computer", 'category_id' => 5],
         ['question'=>"How do you generally accomplish using a radio, television or sound system", 'category_id' => 5],

         ['question'=>"How do you generally accomplish maintaining your home (cleaning, laundry, minor repairs)", 'category_id' => 6],
         ['question'=>"How do you generally accomplish maintaining the grounds of your home (lawn, garden, snow removal, ect)", 'category_id' => 6],
         ['question'=>"How do you generally accomplish painting, major repairs, etc)", 'category_id' => 6],
          ['question'=>"How do you generally accomplish entering and exiting your home", 'category_id' => 6],
          ['question'=>"How do you generally accomplish moving around within your home", 'category_id' => 6],
          ['question'=>"How do you generally accomplish using the furniture and home-furnishing equipment in your home (desk, thermostat, radiator system, etc)", 'category_id' => 6],
         ['question'=>"How do you generally accomplish moving around outside your home (yard, grounds, etc)", 'category_id' => 6],

          ['question'=>"How do you generally accomplish getting around on streets or sidewalks (including crossing streets)", 'category_id' => 7],
         ['question'=>"How do you generally accomplish getting around on slippery or uneven surfaces (snow, ice, grass, gravel)", 'category_id' => 7],
          ['question'=>"How do you generally accomplish getting around on slippery or uneven surfaces (snow, ice, grass, gravel)", 'category_id' => 7],
        ['question'=>"How do you generally accomplish driving a vehicle", 'category_id' => 7],
        ['question'=>"How do you generally accomplish riding a bicycle (for transportation, recreation)", 'category_id' => 7],
        ['question'=>"How do you generally accomplish being a passenger in a vehicle (car, bus, taxi)", 'category_id' => 7],

          ['question'=>"How do you generally accomplish getting to public buildings in your community (governmental, financial, judicial, postal)", 'category_id' => 8],
          ['question'=>"How do you generally accomplish entering and getting around in public buildings in your community", 'category_id' => 8],
          ['question'=>"How do you generally accomplish using the public services in your community", 'category_id' => 8],
          ['question'=>"How do you generally accomplish getting to commercial establishments in your community (supermarket, shopping mall, convenience, etc)", 'category_id' => 8],
          ['question'=>"How do you generally accomplish entering and moving around in commercial establishments in your community (supermarket, shopping mall, convenience store, etc)", 'category_id' => 8],
          ['question'=>"How do you generally accomplish participating in spiritual or religious practices", 'category_id' => 8],
          ['question'=>"How do you generally accomplish participating in social or community groups (social clubs, charity or religious groups)", 'category_id' => 8],

          ['question'=>"How do you generally accomplish participating in educational activities or vocational training at the high school level (courses, homework, extracurricular activities)", 'category_id' => 9],
          ['question'=>"How do you generally accomplish undertaking vocational training (trade school, university, community college)", 'category_id' => 9],

          ['question'=>"How do you generally accomplish participating in sporting or recreational activities (walking, sports, games, etc)", 'category_id' => 10],
          ['question'=>"How do you generally accomplish participating in artistic, cultural or craft activities (music, dance, woodworking)", 'category_id' => 10],
          ['question'=>"How do you generally accomplish going to sporting events ", 'category_id' => 10],
          ['question'=>"How do you generally accomplish going to artistic or cultural events", 'category_id' => 10],
          ['question'=>"How do you generally accomplish taking part in outdoor activities", 'category_id' => 10],
          ['question'=>"How do you generally accomplish participating in tourist activities (traveling, visiting natural or historic sites, camping)", 'category_id' => 10],
          ['question'=>"How do you generally accomplish using your neighbourhood recreational services (library, municipal recreation centre, etc)", 'category_id' => 10],


          ['question'=>"Please select answer 1", 'category_id' => 11],
          ['question'=>"Please select answer 2", 'category_id' => 11],
          ['question'=>"Please select answer 3", 'category_id' => 11],
          ['question'=>"Please select answer 4", 'category_id' => 11],
          ['question'=>"Please select answer 5", 'category_id' => 11],





      ]);


    }
}
