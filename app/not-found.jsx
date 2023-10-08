import Link from "next/link";

function NotDFound(){
    return <section>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver</Link>
    </section>
}

export default NotDFound;