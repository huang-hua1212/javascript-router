<!-- <!DOCTYPE html> -->
<html lang="">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
  <title>
  </title>
</head>
<body>
<div id='app'></div>
<!-- template TESTing -->
<template-test></template-test>
</body>
<script type = 'module'>
  import RoutingRouter from '/routing-render.js';

  window.customElements.define('template-test', RoutingRouter);

</script>
</html>