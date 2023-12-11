import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import "./styles/styles.css"
const AditionalTemplateB = () => {

  return (
    <>
      <div className="container">
        <h2 className="text-center">Agrega mas fotos sobre   tu sitio </h2>
        <p className="text-center">Queremos que nuestros usuarios conozcan mas sobre ti, llena la siguiente informacion para que te conozcan:</p>
        <p className="fw-semibold">Sube un video a tu sitio</p>
        <Form>
          <Row>
            <Col className=" col-12 col-lg-7">
              <FormGroup>
                <button className="button_upload w-100"> <img src="file_upload.svg" alt="" /></button>
                <p className="text_f fw-semibold">Maximo 30 segundos o 30 MB</p>
              </FormGroup>
            </Col>
            <Col className="pt-lg-5 mt-lg-5">
              <FormGroup>
                <Label for="exampleEmail">
                  O inserta tu URL
                </Label>
                <Input
                  id="urlimage"
                  name="url"
                  placeholder="www.sitio.com"
                  type="text"
                  className="w-100"
                />
              </FormGroup>
            </Col>
          </Row>
          <p className="fw-semibold">Agrega hasta tres secciones</p>
          <Row xs="1" lg="3">
            <Col className="grid gap-3">
              <FormGroup>
                <Label for="exampleEmail">
                  Titulo
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Descripcion
                </Label>
                <Input
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"
                  type="text"
                  className="input_descroption"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Imagen
                </Label>
                <button className="button_upload w-100"> <img src="file_upload.svg" alt="" /></button>
              </FormGroup>
            </Col>
            <Col className="grid gap-3">
              <FormGroup>
                <Label for="exampleEmail">
                  Titulo
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Descripcion
                </Label>
                <Input
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"
                  type="text"
                  className="input_descroption"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Imagen
                </Label>
                <button className="button_upload w-100"> <img src="file_upload.svg" alt="" /></button>
              </FormGroup>
            </Col>
            <Col className="grid gap-3">
              <FormGroup>
                <Label for="exampleEmail">
                  Titulo
                </Label>
                <Input
                  id="title"
                  name="title"
                  placeholder="Titulo"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Descripcion
                </Label>
                <Input
                  id="descripcion"
                  name="descripcion"
                  placeholder="Descripcion"
                  type="text"
                  className="input_descroption"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">
                  Imagen
                </Label>
                <button className="button_upload w-100"> <img src="file_upload.svg" alt="" /></button>
              </FormGroup>
            </Col>
          </Row>
        </Form>

      </div>
    </>
  )
}

export default AditionalTemplateB;