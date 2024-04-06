const form = document.getElementById('form')
var database = []

var hasMatch = (userName) =>{


    for (let i = 0; i < database.length; i++){
        if (String(userName) === database[i].name){
            return true
        }

    }

}


const storeData = (userName, userPass, userBirth, userGender)=>{


    if (database.length === 0){
        let data = {

            name: userName,
            pass: userPass,
            birth: userBirth,
            sex: userGender
        }
    
        database.push(data)

        
    
        localStorage.setItem('user', JSON.stringify(database))
        console.log(JSON.parse(localStorage.getItem('user'))) 
        alert("Account made")


    }

    else{   
            

            if (hasMatch(userName)){
                alert("Name taken")
            }
            else{
    
                let data = {
    
                    name: userName,
                    pass: userPass,
                    birth: userBirth,
                    sex: userGender
                }
            
                database.push(data)
                localStorage.setItem('user', JSON.stringify(database))
                console.log(JSON.parse(localStorage.getItem('user'))) 
                alert("Account made")


 
            }
    
        
            }

    }







form.addEventListener('submit', (event) =>{
    event.preventDefault()
    let userName = document.getElementById('name').value
    let userPass = document.getElementById('pass').value
    let userBirth = document.getElementById('date').value
    let userGender = document.getElementById('gender').value
    let oldEnough = userBirth.split('-')[0];
    let today = new Date()


    if (Number(today.getFullYear() - oldEnough) >= 16){
        storeData(userName, userPass, userBirth, userGender )
    
    }
    else{
        alert('Not old enough')
    }

}

)

