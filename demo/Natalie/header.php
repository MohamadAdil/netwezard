<!DOCTYPE html>
<html class="wide wow-animation" lang="en">
<head>
    <title>Home</title>
    <meta name="format-detection" content="telephone=no">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8">
    <link rel="icon" href="images/favicon-Grey.ico" type="image/x-icon">
    <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Arvo:400,700%7COpen+Sans:300,300italic,400,400italic,700italic,800%7CUbuntu:500">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="import" href="tradechain_widget/template.html">
    <!--[if lt IE 10]>
    <div style="background: #212121; padding: 10px 0; box-shadow: 3px 3px 5px 0 rgba(0,0,0,.3); clear: both; text-align:center; position: relative; z-index:1;"><a href="httpqwertywindows.microsoft.com/en-US/internet-explorer/"><img src="images/ie8-panel/warning_bar_0000_us.jpg" border="0" height="42" width="820" alt="You are using an outdated browser. For a faster, safer browsing experience, upgrade for free today."></a></div>
    <script src="js/html5shiv.min.js"></script>
        <![endif]-->
    <script>
        function importTradeChainWidget() {
            var link = document.querySelector('link[rel="import"]');

            // Clone the <template> in the import.
            var template = link.import.querySelector('template');
            var clone = document.importNode(template.content, true);

            document.querySelector('#container').appendChild(clone);
        }
        document.addEventListener('click', function (event) {
            var target = event.target;
            if (target.tagName.toLowerCase() == 'a') {
                var port = target.getAttribute('href').match(/^:(\d+)(.*)/);
                if (port) {
                    target.href = port[2];
                    target.port = port[1];
                }
            }
        }, false);
    </script>
</head>
<body onload="importTradeChainWidget()">
    <div class="page">
        <div class="page-loader page-loader-variant-1">
            <div>
                <a class="brand brand-md brand-inverse" href="index.html"><img src="images/Altrium Logo 2018_White@2x.webp" alt="" width="113" height="45" /></a>
                <div class="page-loader-body">
                    <div id="spinningSquaresG">
                        <div class="spinningSquaresG" id="spinningSquaresG_1"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_2"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_3"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_4"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_5"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_6"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_7"></div>
                        <div class="spinningSquaresG" id="spinningSquaresG_8"></div>
                    </div>
                </div>
            </div>
        </div>
        <header class="page-head">
            <div class="rd-navbar-wrap">
                <nav class="rd-navbar rd-navbar-corporate-light" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="53px" data-xl-stick-up-offset="53px" data-xxl-stick-up-offset="53px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                    <div class="bg-ebony-clay context-dark">
                        <div class="rd-navbar-inner">
                            <div class="rd-navbar-aside-wrap">
                                <div class="rd-navbar-aside">
                                    <div class="rd-navbar-aside-toggle" data-rd-navbar-toggle=".rd-navbar-aside"><span></span></div>
                                    <div class="rd-navbar-aside-content">
                                        <ul class="rd-navbar-aside-group list-units">
                                            <li>
                                                <div class="unit flex-row unit-spacing-xs align-items-center">
                                                    <div class="unit-left"><span class="icon icon-xxs icon-primary fa-map-marker"></span></div>
                                                    <div class="unit-body"><a class="link-secondary" href="#">UK:  1 Primrose street, London EC2A 2EX</a></div>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="unit flex-row unit-spacing-xs align-items-center">
                                                    <div class="unit-left"><span class="icon icon-xxs icon-primary fa-map-marker"></span></div>
                                                    <div class="unit-body"><a class="link-secondary" href="#">USA : 350 Lincoln road, Miami Beach, FL 33139</a></div>
                                                </div>
                                            </li>
                                            <li>
                                            </li>
                                        </ul>
                                        <div class="rd-navbar-aside-group">
                                            <ul class="list-inline list-inline-reset">
                                                <!--li><a class="icon icon-round icon-pciked-bluewood icon-xxs-smallest fa fa-facebook" href="#"></a></li-->
                                                <li><a class="icon icon-round icon-pciked-bluewood icon-xxs-smallest fa fa-twitter" href="https://twitter.com/intent/user?screen_name=AltriumIo"></a></li>
                                                <!--li><a class="icon icon-round icon-pciked-bluewood icon-xxs-smallest fa fa-google-plus" href="#"></a></li-->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="rd-navbar-inner">
                        <div class="rd-navbar-group">
                            <div class="rd-navbar-panel logo_01">
                                <button class="rd-navbar-toggle " data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button><a class="rd-navbar-brand brand" href="index.html"><img src="images/logo.png" alt="" width="113" height="45" /></a>
                            </div>
                            <div class="rd-navbar-group-asside">
                                <div class="rd-navbar-nav-wrap">
                                    <div class="rd-navbar-nav-inner">
                                        <ul class="rd-navbar-nav">
                                            <li class="active">
                                                <a href="#home">Home</a>
                                            </li>
                                            <li>
                                                <a href="#our-service">Services</a>
                                            </li>
                                            <li>
                                                <a href="#how-it-works">How it works</a>
                                            </li>
                                            <li>
                                                <a href="#about-us">About</a>
                                            </li>
                                            <li>
                                                <a href="#technology">Technology</a>
                                            </li>
                                            <li>
                                                <a href="#contact-us">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href=":8080/signin">Login</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="rd-navbar-search">
                                    <form class="rd-search" action="search-results.html" method="GET" data-search-live="rd-search-results-live" data-search-live-count="6">
                                        <div class="rd-search-inner">
                                            <div class="form-wrap">
                                                <label class="form-label" for="rd-search-form-input">Search...</label>
                                                <input class="form-input" id="rd-search-form-input" type="text" name="s" autocomplete="off">
                                            </div>
                                            <button class="rd-search-submit" type="submit"></button>
                                        </div>
                                        <div class="rd-search-results-live" id="rd-search-results-live"></div>
                                    </form>
                                    <button class="rd-navbar-search-toggle" data-rd-navbar-toggle=".rd-navbar-search, .rd-navbar-search-wrap"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>