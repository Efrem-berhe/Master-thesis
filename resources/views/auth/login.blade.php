@extends('layouts.welcome_layout')

@section('content')
    <div class="d-flex justify-content-center align-items-center h-100 ">
        <div class="">
            <form class="navbar-form navbar-right" role="form" method="POST" action="{{ url('/login')}}">
            {{ csrf_field() }}
            <!-- email form starts here -->
                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <!-- the default color is changed and it is found in apps.scss -->
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <input id="email" type="email" placeholder="Email" class="form-control settins-for-paragraphs"
                               name="email" value="{{ old('email') }}" required autofocus>
                    </div>

                    @if ($errors->has('email'))
                        <span class="help-block">
                        <strong>{{ $errors->first('email') }}</strong>
                    </span>
                    @endif
                </div>

                <!-- password form starts here -->
                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <div class="input-group">
                        <div class="input-group-addon">
                            <i class="fa fa-key" aria-hidden="true"></i>

                        </div>
                        <input id="password" placeholder="Password" type="password" class="form-control settins-for-paragraphs"
                               name="password" required>
                    </div>

                    @if ($errors->has('password'))
                        <span class="help-block">
                        <strong>{{ $errors->first('password') }}</strong>
                    </span>
                    @endif
                </div>

                <button type="submit"
                        class="btn Regestor-bg-color form-control settins-for-paragraphs lead signin-background-color lead">Sign In
                </button>

            </form>

            <div class="mt-5 text-center">
                <a href="/register" class="Font-dark" style="">Sign Up Now </a>
            </div>


        </div>
    </div>

@endsection
