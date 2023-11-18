const API_URLS = {
    // Auth API
    login: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/login`,
    logout: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/logout`,
    fetchUser: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/loggedIn`,
    signup: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student`,
    forgotPassOTP: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/sendotp`,
    changePassword: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student/forgotpass`,

    // Course API
    getCourse: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-programs`,
    getCategory: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-programs`,
    getPrograms: (id) => `https://www.api.easyhaionline.com/api/super-admin/progams/get-program?id=${id}`,

    // Micro-Course API
    getList: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/micro-courses/get-list`,

    // Payment Gateway API
    phonePe: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/phonepe`,
    jodo: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/jodopay/create`,
    ccAvenue: `${process.env.NEXT_PUBLIC_SERVER_URI}/pay/api/super-admin/cc-avenue/getEnc`,
    wallet: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/payments/wallet/buy-course`,

    // Blog API


    // Student DashBoard
    updateProfile: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/v1/modules/student`,

    getMap: `${process.env.NEXT_PUBLIC_SERVER_URI}/api/super-admin/progams/get-map`,
}

export default API_URLS
