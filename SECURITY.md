# Security Policy

## Supported Versions

Esta seção informa sobre quais versões do Dashboard de Vendas Power BI estão atualmente recebendo atualizações de segurança.

| Versão | Suportada          | Status |
| ------ | ------------------ | ------ |
| 1.2.x  | :white_check_mark: | Versão atual com suporte ativo |
| 1.1.x  | :white_check_mark: | Suporte de segurança limitado |
| 1.0.x  | :x:                | Sem suporte - Migre para v1.2+ |
| < 1.0  | :x:                | Versões depreciadas |

### Notas sobre Versões
- **v1.2.x**: Versão recomendada com todas as correções de segurança
- **v1.1.x**: Recebe apenas correções críticas de segurança
- **v1.0.x e anteriores**: Não recebem mais atualizações

## Reporting a Vulnerability

### Como Reportar uma Vulnerabilidade

Se você descobriu uma vulnerabilidade de segurança no Dashboard de Vendas Power BI, pedimos que nos ajude a mantê-lo seguro seguindo as diretrizes abaixo:

#### 📧 Canais de Comunicação
- **Email prioritário**: security@webcash-inc.com
- **GitHub Issues**: Para vulnerabilidades não-críticas (use label `security`)
- **Contato direto**: Via GitHub [@WebCash-inc](https://github.com/WebCash-inc)

#### ⏱️ Processo e Cronograma
1. **Confirmação inicial**: Resposta em até **48 horas**
2. **Avaliação**: Análise completa em até **5 dias úteis**
3. **Correção**: Implementação em até **14 dias** para vulnerabilidades críticas
4. **Divulgação**: Comunicado público após correção (se aplicável)

#### 🔍 Informações Necessárias
Ao reportar, inclua:
- **Descrição detalhada** da vulnerabilidade
- **Passos para reprodução** do problema
- **Versão afetada** do dashboard
- **Impacto potencial** da vulnerabilidade
- **Evidências** (screenshots, logs, etc.)
- **Sua informação de contato** para acompanhamento

#### 🚨 Classificação de Severidade

| Nível | Descrição | Tempo de Resposta |
|-------|-----------|-------------------|
| **Crítica** | Acesso não autorizado a dados sensíveis | 24h |
| **Alta** | Comprometimento da integridade dos dados | 48h |
| **Média** | Vulnerabilidades que afetam funcionalidades | 5 dias |
| **Baixa** | Problemas menores de segurança | 10 dias |

### 🛡️ Tipos de Vulnerabilidades Relevantes

Para este projeto Power BI, consideramos especialmente:

#### Dados e Privacidade
- Exposição não autorizada de dados de vendas
- Vazamento de informações comerciais sensíveis
- Problemas na anonimização de dados

#### Acesso e Autenticação
- Bypass de controles de acesso
- Elevação de privilégios no Power BI
- Problemas com Row Level Security (RLS)

#### Integridade dos Dados
- Manipulação não autorizada de dados
- Corrupção de métricas e KPIs
- Alteração maliciosa de DAX

#### Configuração e Deploy
- Configurações inseguras padrão
- Exposição de credenciais
- Problemas na conexão com fontes de dados

### ✅ O que Esperamos de Você

- **Responsabilidade**: Não divulgue a vulnerabilidade publicamente até a correção
- **Cooperação**: Trabalhe conosco para validar e corrigir o problema
- **Detalhes**: Forneça informações suficientes para reproduzir o problema
- **Paciência**: Aguarde nossa resposta dentro dos prazos estabelecidos

### ✅ O que Você Pode Esperar de Nós

- **Resposta rápida**: Confirmação do recebimento em até 48h
- **Transparência**: Atualizações regulares sobre o progresso
- **Reconhecimento**: Crédito público pela descoberta (se desejado)
- **Correção**: Implementação de fix em tempo hábil
- **Comunicação**: Notificação sobre o status da correção

### 🏆 Programa de Reconhecimento

Valorizamos contribuições para a segurança do projeto:
- **Hall of Fame**: Reconhecimento no README.md
- **Badges especiais**: Para contribuidores recorrentes
- **Prioridade em PRs**: Para colaboradores de segurança

### ❌ Vulnerabilidades NÃO Aceitas

- Problemas relacionados exclusivamente ao Power BI Service
- Vulnerabilidades que requerem acesso administrativo
- Ataques de engenharia social
- Problemas de performance que não impactem segurança
- Vulnerabilidades em bibliotecas third-party sem impacto direto

### 📚 Recursos de Segurança

#### Documentação Relevante
- [Power BI Security Whitepaper](https://docs.microsoft.com/power-bi/guidance/whitepaper-powerbi-security)
- [Data Protection in Power BI](https://docs.microsoft.com/power-bi/admin/service-security-data-protection-overview)
- [Row Level Security Guide](https://docs.microsoft.com/power-bi/admin/service-admin-rls)

#### Best Practices Implementadas
- ✅ Row Level Security (RLS) configurado
- ✅ Sensitive data masking aplicado
- ✅ Audit logs habilitados
- ✅ Backup regular dos dados
- ✅ Controle de versão das alterações

### 📞 Contatos de Emergência

Para vulnerabilidades críticas que requerem atenção imediata:

- **Equipe de Segurança**: security@webcash-inc.com
- **Desenvolvedor Principal**: Via GitHub Issues marcando @WebCash-inc
- **Escalação**: Para casos urgentes, mencione "SECURITY CRITICAL" no assunto

---

## 🔒 Compromisso com a Segurança

A segurança dos dados empresariais é nossa prioridade máxima. Este dashboard foi desenvolvido seguindo as melhores práticas de segurança do Power BI e continuamos trabalhando para manter os mais altos padrões de proteção.

**Última atualização**: Agosto 2025  

---

*Para dúvidas sobre esta política de segurança, entre em contato através do email webcash@gmail.com*
