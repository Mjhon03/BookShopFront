import swal from 'sweetalert';

export const Alert = (title, text, icon, button, timer) =>{
  swal({
    title: `${title}`,
    text: `${text}`,
    icon: `${icon}`,
    button: `${button}`,
  });
}

