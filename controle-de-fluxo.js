 document.getElementById("formulario").addEventListener("submit", function(event) {event.preventDefault();

            var destino = document.getElementById("destino").value;

            if (destino === "paris") {
                window.location.href = "paris.html";
            } else if (destino === "londres") {
                window.location.href = "londres.html";
            } else if (destino === "nova-york") {
                window.location.href = "nova-york.html";
            } else if (destino === "toquio") {
                window.location.href = "tokio.html";
            }
        });
