@extends('layouts.welcome_layout')

@section('content')

    <div class="d-flex justify-content-center align-items-center h-100 hidden-lg-up">
    <div class=" ">
        <form class="navbar-form navbar-right" role="form" method="POST" action="{{ url('/login')}}">
        {{ csrf_field() }}
        <!-- font family and font size -->

            <!-- email form starts here -->
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <!-- the default color is changed and it is found in apps.scss -->
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <input id="email" type="email" placeholder="Email" class="form-control settins-for-paragraphs"
                           name="email" value="{{ old('email') }}" required autofocus>

                    @if ($errors->has('email'))

                        <span class="help-block">
                                 <strong>{{ $errors->first('email') }}</strong>
                             </span>
                    @endif
                </div>
            </div>

            <!-- password form starts here -->
            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <input id="password" placeholder="Password" type="password"
                           class="form-control settins-for-paragraphs" name="password" required>

                    @if ($errors->has('password'))
                        <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                    @endif
                </div>
            </div>

            <!-- sign in button -->
            <!-- setting-for-paragraphs are used to change the size and font while background color changes the background color -->
            <!-- both are found in apps.scss -->
            <button type="submit"
                    class="btn btn-success Regestor-bg-color form-control lead">
                Sign In
            </button>
        </form>
        <div class="form-group mt-5">

            <div class="mt-4 text-center">
                <a href="/register" class="Font-dark" style="">Sign Up Now </a>
            </div>

        </div>
    </div></div>
   <div class="d-flex justify-content-center align-items-center h-100 hidden-sm-down">
       <div class="form-group text-center">
           <!-- title custmize the font and color text found in apps.scss-->
           <h4 class="Lato-font Font-dark">Monitor Your Health For Better Quality of Life</h4>
           <button type="button"
                   class="btn btn-success btn-lg lead Regestor-bg-color border-0 Rail-way-font"
                   data-toggle="modal" data-target="#myModal">
               Sign Up Now
           </button>
       </div>
   </div>
   <div id="myModal" class="modal fade " role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog  d-flex justify-content-center align-items-center h-100" role="document"><!-- Modal content-->


           <div class="modal-content border-0">
           <form class="form-horizontal" role="form" method="POST" action="{{ url('/register') }}">
           {{ csrf_field() }}

           <!-- user name form -->
               <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }} customizing-form-horizontal">
                   <div class="input-group">
                       <div class="input-group-addon">
                           <i class="fa fa-user-o"  aria-hidden="true"></i>
                       </div>
                       <input id="name" type="text" class="form-control input-group-sm input-registration-settings"
                              placeholder="User name" name="name" value="{{ old('name') }}" required autofocus>

                       @if ($errors->has('name'))
                           <span class="help-block">
                                         <strong>{{ $errors->first('name') }}</strong>
                                     </span>
                       @endif

                   </div>

               </div>

               <!-- email form -->
               <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }} customizing-form-horizontal">
                   <!-- the default color is changed and it is found in apps.scss -->
                   <div class="input-group">
                       <div class="input-group-addon">
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                       </div>
                       <input id="email" type="email" placeholder="Email"
                              class="form-control input-registration-settings"
                              name="email" value="{{ old('email') }}" required autofocus>

                       @if ($errors->has('email'))

                           <span class="help-block">
                                 <strong>{{ $errors->first('email') }}</strong>
                             </span>
                       @endif
                   </div>
               </div>

               <!-- password   form -->
               <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }} customizing-form-horizontal">
                   <div class="input-group">
                       <div class="input-group-addon">
                           <i class="fa fa-key" aria-hidden="true"></i>
                       </div>
                       <input id="password" placeholder="Password" type="password"
                              class="form-control input-registration-settings" name="password" required>

                       @if ($errors->has('password'))
                           <span class="help-block">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                       @endif
                   </div>
               </div>

               <!-- Confirm password -->
               <div class="form-group customizing-form-horizontal">
                   <div class="input-group">
                       <div class="input-group-addon">
                           <i class="fa fa-key" aria-hidden="true"></i>
                       </div>
                       <input id="password-confirm" placeholder="Confirm password" type="password"
                              class="form-control input-registration-settings" name="password_confirmation" required>
                   </div>
               </div>

               <!-- submit button -->
               <div class="form-group customizing-form-horizontal">
                   <button type="submit"
                           class="btn btn-success form-control border-0 lead Regestor-bg-color">
                       Register
                   </button>
               </div>
           </form>
       </div>
       </div>
   </div>
@endsection

@section('footer')
@endsection
