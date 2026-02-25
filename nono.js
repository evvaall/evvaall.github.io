const API_URL = "https://evva-all-backend.onrender.com/ask";

      async function sendMessage() {
          const input = document.getElementById("user-input");
          const message = input.value.trim();
          if (!message) return;

          const chatBox = document.getElementById("chat-box");

          // Mostra mensagem do usuário
          const userDiv = document.createElement("div");
          userDiv.classList.add("message", "user");
          userDiv.textContent = message;
          chatBox.appendChild(userDiv);
          chatBox.scrollTop = chatBox.scrollHeight;
          input.value = "";

          input.disabled = true;
          try {
              const response = await fetch(API_URL, {
                  method: "POST",
                  headers: {"Content-Type":"application/json"},
                  body: JSON.stringify({mensagem: message})
              });
              const data = await response.json();
              console.log(data);

              // Mostra resposta do agente
              const botDiv = document.createElement("div");
              botDiv.classList.add("message", "bot");
              botDiv.textContent = data.resposta;
              chatBox.appendChild(botDiv);
              chatBox.scrollTop = chatBox.scrollHeight;
          } catch (err) {
              console.error("Erro ao se conectar com a API:", err);
              const errorDiv = document.createElement("div");
              errorDiv.classList.add("message", "bot");
              errorDiv.textContent = "Erro ao conectar com o agente.";
              chatBox.appendChild(errorDiv);
              chatBox.scrollTop = chatBox.scrollHeight;
          } finally {
                input.disabled = false;
                input.focus()
          }
          
      }

      // Permite enviar mensagem com Enter
      document.getElementById("user-input").addEventListener("keydown", function(e){
          if (e.key === "Enter") sendMessage();
      });
