
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href={{ elixir("css/app.css")}}>


    <link href="/css/introjs.css" rel="stylesheet">

<!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">


</head>
<body>
<div class="container-fluid w-100 h-100 Rail-way-font">

    <nav class="navbar  navbar-toggleable-md fixed-top bg-nav" >
        <div class="container" >

            {{--navbar content for small screen--}}

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <div class="fa fa-bars"></div>
            </button>

            <a class="navbar-brand p-0" href={{url("home")}} >{{ config('app.name', 'SeniorLife') }}</a>
            <a class="nav-active-menu-sm hidden-lg-up" href="#">
                {{Route::currentRouteName()}}
            </a>

            <div class="collapse navbar-collapse bg-nav" id="navbarSupportedContent" style="height:56px">

                {{--navbar content for middle screen--}}
                <ul class="navbar-nav pl-2">
                    <li id="id1" class="nav-item  {{ ends_with(Request::url(), 'home') ? "active" : "" }}">
                        <a  class="nav-link" href={{url("home")}} >
                            <i class="fa fa-home" aria-hidden="true"></i>
                            Home
                        </a>
                    </li>
                    <li id="id2" class="nav-item {{ ends_with(Request::url(), 'mysurvey') ? "active" : "" }}">
                        <a  class="nav-link " href={{url("mysurvey")}} >
                            <i class="fa fa-wpforms" aria-hidden="true"></i>
                            Survey
                        </a>
                    </li>

                    <li id="id4" class="nav-item {{ ends_with(Request::url(), 'achievement') ? "active" : "" }}">
                        <a class="nav-link " href={{url("achievement")}}>
                            <i class="fa fa-diamond" aria-hidden="true"></i>
                            Badge
                        </a>
                    </li>

                    <li id="id3" class="{{ ends_with(Request::url(), 'rank') ? "active" : "" }}">
                        <a class="nav-link " href={{url("rank")}} data-step="1" data-intro="This is a tooltip!">
                            <i class="fa fa-trophy" aria-hidden="true"></i>
                            Rank
                        </a>
                    </li>

                    <li class="{{ ends_with(Request::url(), 'contacts') ? "active" : "" }}">
                        <a class="nav-link " href={{url("contacts")}}>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            Contacts
                        </a>
                    </li>

                    <li id="id5" class="nav-item {{ ends_with(Request::url(), 'help') ? "active" : "" }}">
                        <a class="nav-link " href="javascript:void(0);" onclick="startIntro('{{Route::currentRouteName()}}');">
                            <i class="fa fa-question-circle" aria-hidden="true"></i>
                            Help
                        </a>
                    </li>

                    {{--PROFILE is in the collapsed meneu in sm screen --}}
                    <li id="id6" class="nav-item profile hidden-lg-up">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <img src={{ Auth::user()->avatar }} class="rounded" style="width:20px;height: 20px;">
                            {{ title_case(Auth::user()->name )}} <b class="caret"></b>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-right">

                            <button class="dropdown-item border-0 Bg-color-cloud list-group-item border-0 pt-2 pb-2"
                                    onclick="window.location.href='/profile'"><a class="mr-auto">Change picture</a>
                                <i class="fa fa-upload" aria-hidden="true"></i>
                            </button>

                            <div class="dropdown-divider Bg-color-midnight"></div>

                            <button class="dropdown-item Bg-color-cloud list-group-item border-0 pt-2 pb-2"
                                    onclick="window.location.href='#'"><a class="mr-auto">Profile setting
                                </a>
                                <i class="fa fa-upload" aria-hidden="true"></i>
                            </button>

                            <button class="dropdown-item border-0 Bg-color-cloud list-group-item border-0 pt-2 pb-2"
                                    href="{{ url('logout') }}"
                                    onclick="event.preventDefault();
                        document.getElementById('logout-form').submit();">
                                <a class="mr-auto">Sign Out</a>
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                                <form id="logout-form" action="{{ url('/logout') }}" method="POST"
                                      style="display: none;">
                                    {{ csrf_field() }}
                                </form>

                            </button>
                        </ul>
                    </li>
                </ul>

                <div class="navbar-nav ml-auto hidden-md-down">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <img src={{ Auth::user()->avatar }} class="rounded"
                        style="width: 20px;height: 20px;">
                        {{ title_case(Auth::user()->name )}} <b class="caret"></b></a>
                        <ul class="dropdown-menu p-3 m-2 dropdown-menu-right">
                            <li class="dropdown-item list-group-item border-0">
                                <div class="navbar-login">
                                    <div class="row">
                                        <div class="col-lg-5 p-0">

                                            <p class="text-center mb-2">
                                                <img src={{ Auth::user()->avatar }} class="rounded" style="width:100px; height: 100px;"/>
                                            </p>

                                            <button class="btn btn-success btn-sm Line-height-profile" onclick="window.location.href='/profile'">Change picture</button>

                                        </div>
                                        <div class="col-lg-7">
                                            <p class="text-left"><strong> {{ title_case(Auth::user()->name )}}</strong></p>
                                            <p class="text-left small">{{ Auth::user()->email }}</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div class="dropdown-divider"></div>

                            <button class="dropdown-item list-group-item border-0 pt-2 pb-2" href="{{ url('/logout') }}"
                                    onclick="event.preventDefault();
                      document.getElementById('logout-form').submit();">
                                <a class="mr-auto">Sign Out</a>
                                <i class="fa fa-sign-out" aria-hidden="true"></i>
                                <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                                    {{  csrf_field() }}
                                </form>
                            </button>
                        </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        @yield('content')
    </div>
</div>

<!-- jQuery first, then Tether, then Bootstrap JS. -->
<script src={{ elixir("js/app.js")}}></script>

<script src="/js/intro.js"></script>
<script src="/js/tour.js"></script>

</body>
</html>
