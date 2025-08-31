import Header from '../Header/Header';
import s from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={s.container}>
      <Header />
      <main className={s.main}>{children}</main>
    </div>
  );
}

export default Layout;