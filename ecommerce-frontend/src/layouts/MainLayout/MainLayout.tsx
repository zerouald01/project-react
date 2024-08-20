import { Container } from "react-bootstrap"
import styles from './mainLayout.module.css'
import { Header } from '@components/common'
import { Outlet } from "react-router-dom"


const { container, wrapper } = styles;

const MainLayout = () => {
    console.log('MainLayout')
  return (
    <Container className={container}>
        <Header />
        <div className={wrapper}>
            <Outlet />

        </div>

    </Container>
  )
}

export default MainLayout
