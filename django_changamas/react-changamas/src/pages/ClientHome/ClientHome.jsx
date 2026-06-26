import "./ClientHome.css";

import {
  Home,
  Search,
  FileText,
  MessageSquare,
  User,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function ClientHome() {

  const navigate = useNavigate();
  const nombre = localStorage.getItem("nombre") || "Usuario";
  const apellido = localStorage.getItem("apellido") || "";

  return (
    <div className="worker-page client-page">

      <div className="worker-header client-header">

        <div className="worker-logo client-logo">
          changa+
        </div>

        <p className="worker-greeting">
          ¡Hola de nuevo,
        </p>

        <h1>
          {nombre} {apellido}
        </h1>

        <div className="search-container">

          <div className="search-box">

            <Search size={18} />

            <input placeholder="Buscar profesionales" />

          </div>

        </div>

      </div>

      {/* PROFESIONALES */}

      <div className="section">

        <div className="section-header">

          <h3>
            Profesionales destacados
          </h3>

          <span>
            Ver todos
          </span>

        </div>

        <div className="job-card professional-card">

          <div className="job-content">

            <div className="job-info">

              <div className="job-title-row">

                <span className="job-dot blue"></span>

                <div className="professional-name job-title">
                  Electricista
                </div>

              </div>

              <div className="professional-location job-location">
                Berazategui
              </div>

              <div className="professional-rating job-price">
                <Star size={12} />
                4.8
              </div>

            </div>

            <button>
              Ver
            </button>

          </div>

        </div>

        <div className="job-card professional-card">

          <div className="job-content">

            <div className="job-info">

              <div className="job-title-row">

                <span className="job-dot green"></span>

                <div className="professional-name job-title">
                  Plomero
                </div>

              </div>

              <div className="professional-location job-location">
                Quilmes
              </div>

              <div className="professional-rating job-price">
                <Star size={12} />
                4.9
              </div>

            </div>

            <button>
              Ver
            </button>

          </div>

        </div>

      </div>

      {/* SOLICITUDES */}

      <div className="section">

        <div className="section-header">

          <h3>
            Mis solicitudes
          </h3>

          <span>
            Ver todas
          </span>

        </div>

        <div className="job-card request-card">

          <div className="job-content">

            <div className="job-info">

              <div className="job-title-row">

                <span className="job-dot green"></span>

                <div className="professional-name job-title">
                  Instalación eléctrica
                </div>

              </div>

              <div className="professional-location job-location">
                3 propuestas recibidas
              </div>

            </div>

          </div>

        </div>

        <div className="job-card request-card">

          <div className="job-content">

            <div className="job-info">

              <div className="job-title-row">

                <span className="job-dot red"></span>

                <div className="professional-name job-title">
                  Reparación de techo
                </div>

              </div>

              <div className="professional-location job-location">
                Sin respuestas
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* CHAT */}

      <div className="section">

        <h3>
          Chat
        </h3>

        <div className="chat-box">

          <div className="chat-top">
            1 Solicitud de Mensaje disponible
          </div>

          <div className="chat-item">

            <div className="chat-avatar">
              GP
            </div>

            <div className="chat-content">
              <strong>
                Gerardo Peralta
              </strong>

              <p>
                Le paso presupuesto...
              </p>
            </div>

          </div>

          <div className="chat-footer">
            No hay más mensajes
          </div>
        </div>

      </div>

      {/* NAVBAR */}

      <div className="bottom-navbar">

        <div className="nav-item active">
          <Home size={18}/>
          <span>Inicio</span>
        </div>

        <div className="nav-item">
          <Search size={18}/>
          <span>Buscar</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/client/publicaciones")}>
          <FileText size={18}/>
          <span>Solicitudes</span>
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/chats", { state: { role: "client" } })}
        >
          <MessageSquare size={18}/>
          <span>Chat</span>
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/client/perfil")}
        >
          <User size={18}/>
          <span>Perfil</span>
        </div>

      </div>

    </div>
  );
}

export default ClientHome;