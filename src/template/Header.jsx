import React from "react";
import { Menubar } from "primereact/menubar";
import { Link } from "react-router-dom"

const Header = () => {
  const items = [
    {
      label: "Home",
      url: "/"
    },
    {
      label: "Materias",
      icon: "pi pi-book",
      url: "/subjects"
    },
    {
      label: "Usuarios",
      icon: "pi pi-users",
      items: [
        {
          label: "Alumnos",
        },
        {
          label: "Profesores",
        },
        {
          label: "Tipos de Usuarios",
        },
      ],
    },
  ];

  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
      (e.target.src =
        "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="mr-2"
    ></img>
  );

  return (<Menubar model={items} start={start}></Menubar>);
};

export default Header;
