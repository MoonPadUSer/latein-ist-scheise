if(window.file &&
	window.FileReader &&
	window.FileList &&
	window.Blob){
	alert('Successful');
}
else
{
	alert('The File APIs are not fully supported in this browser.');
}