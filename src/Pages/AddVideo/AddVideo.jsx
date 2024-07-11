import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import { InputText } from "../../components/InputText/InputText"
import Select from "../../components/Select/Select"
import TextArea from "../../components/TextArea/TextArea"
import styles from "./AddVideo.module.css"
const AddVideo = () => {
  return (
    <>
      <Header variantB="blue" backgroundC="rgba(0, 0, 0, 0.9)" />
      <section className={styles.add}>
        <div className={styles.title}>
          <h1 className={styles.newVideo}>NUEVO VIDEO</h1>
          <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
        </div>

        <form className={styles.addForm}>
          <h2 className={styles.addCard}>Crear Tarjeta</h2>
          <InputText labelText="Título" inputPlaceHolder="Ingrese título" />
          <Select labelText="Categoria" inputPlaceHolder="Ingrese categoria" />
          <InputText labelText="Imagen" inputPlaceHolder="Ingrece el enlace de la imagen" />
          <InputText labelText="Video" inputPlaceHolder="Ingreseel enlace de el video" />
          <TextArea labelText="Descripción" placeholder="¿De que trata este video?" />
          <div className={styles.buttons}>
            <Button text="Guardar" variant="blue2" />
            <Button text="Limpiar" variant="default2" />
          </div>
        </form>



      </section>
    </>
  )
}

export default AddVideo