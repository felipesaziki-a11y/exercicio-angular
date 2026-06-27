import { Routes, RouterOutlet } from '@angular/router';

export const routes: Routes = [
    {path: "relatorios-financeiros/cadastrar", loadComponent: () => RelatorionFinanceiroCadastrar }, 
    {path: "relatorios-financeiros", loadComponent: () => RelatorionFinanceiro },
    {path: "relatorios-financeiros/editar", loadComponent: () => RelatorionFinanceiroEditar }
];