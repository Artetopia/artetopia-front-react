import ProfilePicture from "../../../public/images/usuario.png";
import './styles.css'

const ClientProfile = () => {
  return (
    <>
    <div className="top-container ">
      <section className="profile">
        <img src={ProfilePicture} alt="Imagen de perfil" className="profile_pic" />
        <button className="pic_button">Cambiar foto perfil</button>
      </section>

      <section className="profile_main_info">
        <h2>Datos Personales</h2>
        <div class="mb-3">
          <label for="formGroupExampleInput" class="form-label">
            Nombre (s)
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Nombres"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Apellidos
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Appelidos"
          ></input>
        </div>
        <div class="mb-3">
          <label for="formGroupExampleInput2" class="form-label">
            Teléfono
          </label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Numero de teléfono"
          ></input>
        </div>
        <div className="flex_button">
            <button className="buttons">Editar datos personales</button>
        </div>
      </section>
    </div>

<section className="password_main_info">
<h2>Seguridad</h2>
<div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">
  Contraseña actual
  </label>
  <input
    type="password"
    class="form-control"
    id="formGroupExampleInput"
    placeholder="contraseña actual"
  ></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">
  Nueva contraseña
  </label>
  <input
    type="password"
    class="form-control"
    id="formGroupExampleInput2"
    placeholder="nueva contraseña"
  ></input>
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">
  Confirmar nueva contraseña
  </label>
  <input
    type="password"
    class="form-control"
    id="formGroupExampleInput2"
    placeholder="confirmacion de nueva contraseña"
  ></input>
</div>
<div className="flex_button">
    <button className="buttons">Actualizar contraseña</button>
</div>
</section>
</>
  );
};
export default ClientProfile;
