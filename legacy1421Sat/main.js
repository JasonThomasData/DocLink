$(document).ready(function(){
	var languages = ['English', 'Arabic', 'Mandarin'];
	for (i=0; i< languages.length; i++){
		$('#chooseLanguage').append('<div>')
		$('#chooseLanguage div:last-child').html(languages[i]).attr('class', 'language')
	}
});