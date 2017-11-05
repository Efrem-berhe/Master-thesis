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

    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top Nav-bg-color" style="
    height: 56px;
">
        <div class="container">
            <div class="navbar-header">
                <a class="navbar-brand p-0" href="#">
                    {{ config('app.name', 'SeniorLife') }}</a>

            </div>
        </div>
    </nav>

    <div class="container mt-5">
        @yield('content')
    </div>

</div>





<!-- Bootstrap core JavaScript
================================================== -->
<!-- Placed at the end of the document so the pages load faster -->

<script src={{ elixir("js/app.js")}}></script>

</body>
</html>
