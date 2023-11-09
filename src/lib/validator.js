export function validateemail(email){
    const regex = /.@\w+\.\w+/
    if(regex.test(email))
        return true
    return false
}