import "./WorkerHome.css";

import {
  Home,
  Search,
  FileText,
  MessageSquare,
  User,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function WorkerHome() {

  const navigate = useNavigate();
  const nombre = localStorage.getItem("nombre") || "Usuario";
  const apellido = localStorage.getItem("apellido") || "";
  
  return (
    <div className="worker-page">

      {/* HEADER */}

      <div className="worker-header">

        <div className="worker-logo">
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

            <input
              placeholder="Buscar trabajos disponibles"
            />

          </div>

        </div>

      </div>

      {/* TRABAJOS */}
      <div className="section">
        <div className="section-header">
          <h3>Trabajos disponibles</h3>
          <span>Ver todos</span>
        </div>
        <div className="jobs-grid">
          <div className="job-card">...</div>
          <div className="job-card">...</div>
        </div>
      </div>

      {/* PUBLICACIONES */}
      <div className="section">
        <div className="section-header">
          <h3>Mis publicaciones</h3>
          <span>Ver todas</span>
        </div>
        <div className="publications-grid">
          <div className="publication-card">...</div>
          <div className="publication-card">...</div>
        </div>
      </div>
      
      {/* CHAT */}

      <div className="section">

        <h3>Chat</h3>

        <div className="chat-box">

          <div className="chat-top">
            2 Solicitudes de Mensaje disponibles
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
                Buenas, le paso mi presupuesto acerca del trabajo...
              </p>

            </div>

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
                Buenas, le paso mi presupuesto acerca del trabajo...
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
          <Home size={18} />
          <span>Inicio</span>
        </div>

        <div className="nav-item">
          <Search size={18} />
          <span>Explorar</span>
        </div>

        <div className="nav-item" onClick={() => navigate("/worker/publicaciones")}>
          <FileText size={18} />
          <span>Publicaciones</span>
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/chats", { state: { role: "worker" } })}
        >
          <MessageSquare size={18} />
          <span>Chats</span>
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/worker/perfil")}
        >
          <User size={18} />
          <span>Mi perfil</span>
        </div>

      </div>

    </div>
  );
}

export default WorkerHome;