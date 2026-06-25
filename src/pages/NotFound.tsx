import NotFoundForm from "../components/notfound/NotFoundForm"
import MainLayout from "../layouts/MainLayout"

const NotFound = () => {
  return (<MainLayout footer={false} announcementBar={false} >
    <NotFoundForm />
  </MainLayout>)
}

export default NotFound