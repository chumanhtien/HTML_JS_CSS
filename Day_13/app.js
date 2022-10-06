let upload = document.querySelector('#file_input')
let preview = document.querySelector('.preview')
let error = document.querySelector('.error')

upload.addEventListener('change', function () {
    console.log('change', upload.files[0])
    let fileUpdated = upload.files[0]
    let img = document.createElement('img')

    if (!fileUpdated) {
        return
    }
    if (!fileUpdated.name.endsWith('.jpg') && !fileUpdated.name.endsWith('.png')) {
        console.log("Phai upload dung dinh dang anh")
        error.innerHTML = `Phai upload file dinh dang hinh anh`
        return
    } else {
        error.innerHTML = ``
    }

    if (fileUpdated.size / (1024 * 1024) > 5) {
        error.innerHTML = `Chi duoc upload anh < 5MB`
    } else {
        error.innerHTML = ``
    }


    //Cach 2: Base 64
    let fileReader = new FileReader()
    fileReader.readAsDataURL(fileUpdated)
    fileReader.onloadend = function (e) {
        img.src = e.target.result
    }

    //Cach 1
    // img.src = URL.createObjectURL(upload.files[0])
    preview.appendChild(img)
})