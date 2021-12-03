import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    
  `,
  styles: []
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    /* this.minhaPromise('Julianas')
    .then(resultado => console.log(resultado))
    .catch(erro => console.log(erro)) */

    /* this.minhaobservable('Juliana')
    .subscribe(resultado => console.log(resultado),
    erro => console.log(erro)); */

    const observer =
    {
      next: (valor: any) => console.log('next: ', valor),
      error: (erro: any) => console.log('erro: ', erro)
     // complete: () => console.log('FIM')
    }

    /* const obs = this.minhaobservable('Juliana');
    obs.subscribe(observer); */

    const obs = this.usuarioObservable('Admin', 'admin@gmail.com');
    //subscription
    const subs = obs.subscribe(observer);
    //cancelando uma subscription
    setTimeout(()=>
        {
          subs.unsubscribe();
          console.log('conexão fechada: ' + subs.closed)
        },5000);

 /*    escrever (Text: String)
    {
      console.log(Text);
    } */
  }
  
  title = 'RXJS';

  minhaPromise(nome: string) : Promise<string>
  {
    return new Promise((resolve, reject)=> 
    {
      if (nome == 'Juliana')
      {
        //simulando o retorno de um backend
        setTimeout(()=>
        {
          resolve('Seja bem vinda ' + nome);
        },1000);
       // Subscriber.complete();
      }
      else
      {
        reject ('você não possui acesso ' + nome);
      }
    })
  }

  //observable não morre
  minhaobservable(nome: string) : Observable<string>
  {
    return new Observable(Subscriber =>
      {
        if(nome =='Juliana')
        {
          Subscriber.next('olá');
          Subscriber.next('olá de novo');
          setTimeout(()=>
          {
            Subscriber.next('Seja bem vinda ' + nome);
          },1000);
        }
        else
        {
          Subscriber.error('você não possui acesso')
        }
      });
  }

  usuarioObservable(nome: string, email: string) : Observable<Usuario>
  {
    return new Observable(Subscriber =>
      {
        if(nome =='Admin')
        {
          let usuario = new Usuario(nome, email)
          setTimeout(()=>
          {
            Subscriber.next(usuario);
          },1000);

          setTimeout(()=>
          {
            Subscriber.next(usuario);
          },6000);
        }
        else
        {
          Subscriber.error('você não possui acesso')
        }
      });
  }
}

function escrever(texto: any, String: StringConstructor) {
  throw new Error('Function not implemented.');
}

export class Usuario
{
  constructor(nome: string, email: string)
  {
    this.nome = nome;
    this.email = email;
  }
  nome: string;
  email: string;
}
