'use strict';

/**
 * @ngdoc function
 * @name gruntApp.controller:ChurchCtrl
 * @description
 * # ChurchCtrl
 * Controller of the gruntApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', function ($scope, $sce) {

	$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/RmVWzj4UGiE");
	
	$scope.title = "iGun (Visual FX)";
	$scope.description = "this is a brief description of what the film is, along with what my input was, how I created it and why i think I'm the bees fookin knees. Now I need to make sure everything lines up. this is a brief description of what the film is, along with what my input was, how I created it and why i think I'm the bees fookin knees. this is a brief description of what the film is, along with Random words to make text look realistic. what my input was, how I created it and why i think I'm the bees fookin knees. this is a brief description of what the film is, along with what my input was, how I created it and why i think I'm the bees fookin knees"

	$scope.setVideoVFX = function(){
		$scope.title = "iGun (Visual FX)";	
		$scope.description = "A project that was created for the completion of a module for my university degree, called 'Visual Effects and Compilation'. This short clip involves one of my tutors using green screens as well as background scenes (shot at different times of the day). My role involved rotoscoping, colour correcting and animating parts of the scene to make it into an action sequence. I used Adobe After Effects for all aspects of the scene."
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/RmVWzj4UGiE");
		$scope.videoImageSource = "images/carousel1.jpg";	
	}
	$scope.setVideoAnimation = function(){
		$scope.title = "Animation Showreel";
		$scope.description = "A small project that was conducted for a module in my degree, called '3D Animation'. This project was divided into two sections, the first was to animate a lamp (similar to the Pixar animation lamp) to resemble three or more emotions. My animation displayed a 'bored' lamp who is strolling along until it sees a bouncy ball. 'Excitedly', it rushes over to claim the lamp until it's attention is caught by the sign. It then reads the sign and 'cautiously' scans the area, only discover that there is a death piut below. To which it is scared beyond control and falls into the pit.                                          The second animation was using only a small selection of 3D items from our tutor and from this I had to create a 'Rube Goldberg Machine', where small movements set off movements of other items. I decided to create an alarm system to which a thieving teapot appears to set off by mistake."
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/tUZq2osegMU");
		$scope.videoImageSource = "images/carousel2.jpg";		
	}
	$scope.setVideoSSN = function(){
		$scope.title = "Survival Skills Network";
		$scope.description = 'This was for one of my digital media related course modules, where we needed to plan, film and edit a short TV show. I was responsible for the scripting, editing, presenting and directing (for scenes in which I was not presenting) for the entire show. Final Cut was used for the editing proces along with small aditions in Adobe After Effects.'		
		$scope.videoSource = $sce.trustAsResourceUrl("https://www.youtube.com/embed/f7SrMpBrjD4");
		$scope.videoImageSource = "images/carousel3.jpg";		
	}

$scope.currentPage = "";

$scope.setPageAbout = function(){
	$scope.currentPage = " - About";
}	
$scope.setPageWebsites = function(){
	$scope.currentPage = " - Websites";
}	
$scope.setPageFilms = function(){
	$scope.currentPage = " - Films";
}
	
$scope.websites = [
		{id:'websites-smokestack', 
		title:'Smokestack Picture House', 
		img:'images/smokestackImage.png', 
		imgID: 'img-smokestack',
		text:'A filmography company website in which I signle handedly designed and developed the entire process. Placeholder text/images/videos are used until I recieve their material and a purchased domain. It inherits a mobile-responsive design with contrasting structured pages. The home page contains their showreel which I used HTML canvas to allow it to be played in the background on phones/ios devices.', 
		ref:'https://a228357fae8bb769386e66cce5f1e54661a489e5.googledrive.com/host/0B-TVVaXuw1TBdHNlcVotSjI1SFU/#/', 
		btn:'Enjoy Cinematography'},
		
		{id:'websites-augmind',
		title:'Augmind Hive', 
		img:'images/AugmindImage.png', 
		imgID:'img-augmind',		
		text:'A single page website for a small kick-starter company for virtual reality augmentation. The company is still  in development of their product and therefore the images and text used on their web page will likely change in the near future. ', 
		ref:'http://augmindhive.com/', 
		btn:'Brainwash Your Mind'},
		
		{id:'websites-virtualmuseum',
		title:'Virtual Museum', 
		img:'images/virtualMuseumImage.png', 
		imgID:'img-virtualmuseum',				
		text:'The aim was to create a mobile responsive web page which utilized a new piece of technology called X3Dom, which allows 3D models to be displayed and manipulated through HTML. It adopted a Model View Controller format, using a Firebase back end API via AngularJS. The 3D models were modeled to resemble existing objects from the Victoria & Albert museum using 3DsMax and the short film was edited using Final Cut Pro.', 
		ref:'http://users.sussex.ac.uk/~sd354/virtual_museum/', 
		btn:'Visit Museum'},
		
		{id:'websites-santachiara',
		title:'Church of Santa Chiara', 
		img:'images/santaChiaraDisplays.png',
		imgID:'img-santachiara',				
		text:'A small website for visitors to the Church of Santa Chiara exhibit, in the Victoria & Albert museum. This website adopted a Model View Controller structure, utilising a Firebase API backend along with AngularJS controllers.', 
		ref:'http://users.sussex.ac.uk/~sd354/santa_chiara/', 
		btn:'Explore Church'},
		
		{id:'websites-cocacola',
		title:'3D CocaCola Models', 
		img:'images/cocacolaImage.png', 
		imgID:'img-cocacola',				
		text:'A mobile responsive web page which utilized a new piece of technology called X3Dom, allowing 3D models to be displayed and manipulated in HTML. The 3D models were modelled to resemble a CocaCola can, Sprite plastic bottle and Dr Pepper cup using 3DsMax', 
		ref:'http://users.sussex.ac.uk/~sd354/mobile3dapp/part_1/', 
		btn:'Drink Coke'},		
		
		{id:'websites-snake',
		title:'HTML Canvas Snake Game', 
		img:'images/snakeImage.png', 
		imgID:'img-snake',				
		text:'This was a small project where I created a game using HTML canvas and JavaScript. The game is a version of the classic snake game from the nineties. It contains an instruction video along with the ability to play 2 player.', 
		ref:'http://users.sussex.ac.uk/~sd354/snake/', 
		btn:'Play Snake'}
	];	
	$scope.$on('$routeChangeSuccess', function () {
    window.scrollTo(0, 0);
});

});
