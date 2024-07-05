import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Alert = () => {
  const { store } = useContext(Context)

  return (
            <div className={`alert alert-${store.alert.back} ${store.alert.visible ? '' : 'd-none'}`} role="alert">
                {store.alert.text}
            </div>
  )
}