import React from 'react'
import MainLayout from '../layouts/MainLayout'
import SignInForm from '../components/auth/SignInForm'

const SignIn = () => {
    return (<MainLayout footer={false} announcementBar={false}>
        <SignInForm />
    </MainLayout>)
}

export default SignIn
