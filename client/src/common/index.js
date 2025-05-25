const backendDomain = "http://localhost:8080";
// http://localhost:8080/api/my-bookings
const summaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "POST",
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
        method : "POST",
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "GET",
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "GET",
    },
    uploadCenter : {
        url : `${backendDomain}/api/upload-center-details`,
        method : "POST",
    },
    allCenter : {
        url : `${backendDomain}/api/get-all-center`,
        method : "GET", 
    },
    booking :{
        url : `${backendDomain}/api/booking`,
        method : "POST",
    },
    payment :{
        url : `${backendDomain}/api/payment`,
        method : "POST",
    },
    verifyPayment :{
        url : `${backendDomain}/api/verify-payment`,
        method : "POST",
    },
    addReview :{
        url : `${backendDomain}/api/add-review`,
        method : "POST",
    },
    getReview :{
        url : `${backendDomain}/api/center/:id`,
        method : "GET",
    }, 
    myBooking :{
        url : `${backendDomain}/api/my-bookings`,
        method : "GET",
    }
}
export default summaryApi