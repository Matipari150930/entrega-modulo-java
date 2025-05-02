// calculadora

function sumar(a, b) {
    return a + b;
  }
  function restar(a, b) {
    return a - b;
  }
  function multiplicar(a, b) {
    return a * b;
  }
  function dividir(a, b) {
    if (b === 0) {
      alert("No se puede dividir por cero");
      return 0;
    }
    return a / b;
  }
  
  // cálculos

  document.getElementById('btn-calcular').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    const operacion = document.getElementById('operacion').value;
    let resultado = 0;
  
    if (operacion === 'sumar') {
      resultado = sumar(num1, num2);
    } else if (operacion === 'restar') {
      resultado = restar(num1, num2);
    } else if (operacion === 'multiplicar') {
      resultado = multiplicar(num1, num2);
    } else if (operacion === 'dividir') {
      resultado = dividir(num1, num2);
    }
  
    document.getElementById('resultado').textContent = resultado;
  });
  
  // lista de tareas

  let tareas = [];
  
  function renderizarTareas() {
    const lista = document.getElementById('lista-de-tareas');
    lista.innerHTML = ''; // para borrar la lista
  
    tareas.forEach((tarea, index) => {
      const li = document.createElement('li');
      if (tarea.completado) {
        li.classList.add('completed');
      }
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = tarea.completado;
      checkbox.addEventListener('change', () => {
        marcarTarea(index);
      });
      li.appendChild(checkbox);
  
      const span = document.createElement('span');
      span.textContent = tarea.texto;
      li.appendChild(span);
  
      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.addEventListener('click', () => {
        eliminarTarea(index);
      });
      li.appendChild(btnEliminar);
  
      lista.appendChild(li);
    });
  }
  
  function agregarTarea() {
    const input = document.getElementById('input-tarea');
    const texto = input.value.trim();
    if (texto !== '') {
      tareas.push({ texto: texto, completado: false });
      input.value = '';
      renderizarTareas();
    }
  }
  
  function marcarTarea(index) {
    tareas[index].completado = !tareas[index].completado;
    renderizarTareas();
  }
  
  function eliminarTarea(index) {
    tareas.splice(index, 1);
    renderizarTareas();
  }
  
  // agregar tareas
  document.getElementById('btn-agregar-tarea').addEventListener('click', agregarTarea);
  document.getElementById('input-tarea').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      agregarTarea();
    }
  });
  
  // galería de imágenes
  
  const imagenPrincipal = document.getElementById('imagen-principal');
  const miniaturas = document.querySelectorAll('#miniaturas .miniatura');
  
  miniaturas.forEach(miniaturas => {
    miniaturas.addEventListener("click", () => {
        imagenPrincipal.src = miniaturas.src;
    });
});
