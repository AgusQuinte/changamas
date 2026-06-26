import "./ChatRoom.css";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { API_URL } from "../../config";

function ChatRoom() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [miId, setMiId] = useState(null);
  const [nombreOtro, setNombreOtro] = useState("");
  const [cargando, setCargando] = useState(true);
  const messagesEndRef = useRef(null);

  const token = localStorage.getItem("access");

  // Cargar mensajes
  useEffect(() => {
    const fetchMensajes = async () => {
      try {
        const res = await fetch(`${API_URL}/api/chats/${id}/mensajes/`, {
          headers: { "Authorization": `Bearer ${token}` },
        });

        const data = await res.json();
        setMessages(data.mensajes);
        setMiId(data.mi_id);
        setNombreOtro(data.nombre_otro);
      } catch (err) {
        console.error("Error al cargar mensajes", err);
      } finally {
        setCargando(false);
      }
    };

    fetchMensajes();

    // Polling cada 3 segundos para nuevos mensajes
    const interval = setInterval(fetchMensajes, 3000);
    return () => clearInterval(interval);
  }, [id]);

  // Scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    try {
      const res = await fetch(`${API_URL}/api/chats/${id}/mensajes/`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ texto: newMessage }),
      });

      const data = await res.json();
      setMessages(prev => [...prev, data]);
      setNewMessage("");
    } catch (err) {
      console.error("Error al enviar mensaje", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-room">

      <div className="room-header">
        <button onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <div>
          <strong>{nombreOtro || "Chat"}</strong>
          <p>Activo ahora</p>
        </div>
      </div>

      <div className="messages">
        {cargando && <p style={{ textAlign: "center", color: "#999" }}>Cargando mensajes...</p>}
        {!cargando && messages.length === 0 && (
          <p style={{ textAlign: "center", color: "#999" }}>No hay mensajes todavía</p>
        )}

        {messages.map(msg => (
          <div
            key={msg.id}
            className={msg.senderId === miId ? "message sent" : "message received"}
          >
            {msg.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="message-input">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe un mensaje..."
        />
        <button onClick={sendMessage}>
          <Send size={18} />
        </button>
      </div>

    </div>
  );
}

export default ChatRoom;