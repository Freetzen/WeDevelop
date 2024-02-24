import { useEffect, useState } from "react";
import { Section } from "../../components/section/Section";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const Quote = () => {
  const navigate = useNavigate()
  const { user, isLoading } = useAuth0()
  const [quote, setQuote] = useState({
    purpose: '',
    apiOrDatabase: null,
    amountOfProducts: null,
    extraServices: null,
    legalNorm: null,
    amountOfVisits: null,
    language: null,
    desing: null,
    support: null,
    extraRequeriments: null,
  })

  useEffect(() => {
    if (!isLoading && !user) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debes iniciar sesión!",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate("/");
    }
  }, [isLoading, user, navigate]);

  return (
    <>
      {
        user
          ? <Section quote={quote} setQuote={setQuote} />
          : null
      }
    </>
  )
}
