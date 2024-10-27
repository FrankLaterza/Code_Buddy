// Assuming you have an input element of type "file" in your HTML where users can select the image
let API_TOKEN = process.env.REACT_APP_LUXAND_TOKEN;

function emotions(image, callback){
    let myHeaders = new Headers();
    myHeaders.append("token", API_TOKEN);

    let formdata;   

    if ((typeof image === "string") && (image.indexOf('https://www.franklaterza.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprof_bush.e4a2dc27.jpg&w=384&q=75') === 0))
         formdata.append("photo", image);
    else
         formdata.append(JSON.stringify({photo: image}));

    // console.log(JSON.stringify({"photo": image}));

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
      
    fetch("https://api.luxand.cloud/photo/emotions", requestOptions)
        .then(response => response.json())
        .then(result => callback(result))
        .catch(error => console.log('error', error)); 
};
export default emotions;