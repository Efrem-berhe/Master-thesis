<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../favicon.ico">

    <title>Avatar and Gamification </title>

    <!-- Bootstrap 4 core CSS -->
    <!-- Custom styles for this template -->
    <link href={{ elixir("css/app.css")}} rel="stylesheet">
    <meta name="csrf-token" content="{{ csrf_token() }}">


</head>

<body>

  <div class="container-fluid w-100 h-100 Rail-way-font">

     <nav class="navbar  navbar-toggleable-md fixed-top back-color" >
          <div class="container" style="padding-right:0px">

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

              <div class="float-right collapse navbar-collapse back-color" id="navbarSupportedContent" style="height:56px">

                  {{--navbar content for middle screen--}}

                  <div class="navbar-nav ml-auto hidden-md-down">
                    {{-- <ul class="navbar-nav nav-item"> --}}
                    {{-- <li class="hidden-xs"><a href="#" class=" nav-link add-project" data-toggle="modal" data-target="#add_project" style="padding-top:16px;padding-bottom:18px">Add Project</a></li> --}}
                    {{-- <li>
                                       <a href="#" class="icon-info">
                                           <i class="nav-item nav-link fa fa-envelope" aria-hidden="true" style="padding-right:16px;color:white;padding-top:20px;padding-bottom:20px"></i>
                                           <span class="label label-primary">3</span>
                                       </a>
                    </li>

                   </ul> --}}

                      <a class="nav-link" data-toggle="dropdown" href="#" style="padding-top:14px;padding-bottom:14px">
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

    <div class="container-fluid display-table">
        <div class="row display-table-row">
            <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                <div class="logo">
                    <img src="/img/supervisor.png"/>
                </div>

                <div class="navi">
                    <ul style="padding-left:0px">
                        <li class="{{ ends_with(Request::url(), 'supervisor') ? "active" : "" }}"><a href="/supervisor"><i class="fa fa-home" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Home</span></a></li>
                        <li class="{{ ends_with(Request::url(), '/supervisor/users') ? "active" : "" }}"><a href="/supervisor/users"><i class="fa fa-user" aria-hidden="true"></i><span class="hidden-xs hidden-sm">Respondents</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-10 mt-2 col-sm-11 display-table-cell v-align">
              @yield('content')
            </div>
        </div>

    </div>


</body>

<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

<script src={{ elixir("js/app.js")}}></script>
<script src="/js/supervisor.js"></script>
<script src="//rawgithub.com/stidges/jquery-searchable/master/dist/jquery.searchable-1.0.0.min.js"></script>

</body>
</html>
