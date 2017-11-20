@extends('layouts.welcome_layout')
@section('content')
    <div class="d-flex justify-content-center align-items-center h-100 ">
        <form class="navbar-form navbar-right" role="form" method="POST" action="{{ url('/register')}}">
        {{ csrf_field() }}
        <!-- font family and font size -->

            <!-- email form starts here -->
            <div class="form-group">
                <!-- the default color is changed and it is found in apps.scss -->
                <div class="input-group">
                    <div class="input-group-addon">

                        <i class="fa fa-user-o" style="width:16px;" aria-hidden="true"></i>
                    </div>
                    <input id="name" type="text" class="form-control input-group-sm input-registration-settings"
                           placeholder="User name" name="name" value="{{ old('name') }}" required autofocus>


                </div>
                @if ($errors->has('name'))
                    <span class="form-text Red-color">
                                         <strong>{{ $errors->first('name') }}</strong>
                                     </span>
                @endif
            </div>

            <!-- email form -->
            <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                <!-- the default color is changed and it is found in apps.scss -->
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <input id="email" type="email" placeholder="Email" class="form-control input-registration-settings"
                           name="email" value="{{ old('email') }}" required autofocus>

                </div>
                @if ($errors->has('email'))

                    <span class="form-text Red-color">
                                 <strong>{{ $errors->first('email') }}</strong>
                             </span>
                @endif
            </div>
            <!-- password   form -->
            <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <input id="password" placeholder="Password" type="password"
                           class="form-control input-registration-settings" name="password" required>

                </div>
                @if ($errors->has('password'))
                    <span class="form-text Red-color">
                                <strong>{{ $errors->first('password') }}</strong>
                            </span>
                @endif
            </div>
            <!-- Confirm password -->
            <div class="form-group">
                <div class="input-group">
                    <div class="input-group-addon">
                        <i class="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <input id="password-confirm" placeholder="Confirm password" type="password"
                           class="form-control input-registration-settings" name="password_confirmation" required>
                </div>
            </div>
            <!-- submit button -->
            <div class="form-group">
                <button type="submit"
                        class="btn btn-success form-control Regestor-bg-color border-0 Rail-way-font lead">Register
                </button>
            </div>
        </form>
    </div>
@endsection
