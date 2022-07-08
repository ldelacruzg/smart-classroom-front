import { useState } from 'react'
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"
import { InputText } from "primereact/inputtext"
import DataTableCrudDemo from '../DataTable'

const Subject = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [value, setValue] = useState("");

  return (
    <DataTableCrudDemo>
      {/* <div className="p-card p-5 m-5">
      <div className="flex card-container indigo-container">
        <Button
          icon="pi pi-plus"
          className="p-button-rounded"
          onClick={() => setDisplayBasic(true)}
        />

        <Dialog
          header="Materia"
          visible={displayBasic}
          style={{ width: "50vw" }}
          onHide={() => setDisplayBasic(false)}
        >
          <form>
            <div className="field mb-3">
              <label htmlFor="name">Nombre</label>
              <InputText className="w-full" id="name" value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
            <Button label="Enviar" />
          </form>
        </Dialog>        
      </div>
    </div> */}
    </DataTableCrudDemo>
  );
}

export default Subject