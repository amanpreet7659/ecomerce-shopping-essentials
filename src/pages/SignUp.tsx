import MainLayout from '../layouts/MainLayout'
import SignUpForm from '../components/auth/SignUpForm'

const SignUp = () => {
    return (<MainLayout footer={false} announcementBar={false} > 
        <SignUpForm/>
    </MainLayout>)
}

export default SignUp
