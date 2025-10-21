param (
    [string]$Stand = "Staging" # Valor padrão é Staging se nenhum for especificado
)

# Obter a data atual no formato DD/MM/AAAA
$dataAtual = Get-Date -Format "dd/MM/yyyy"

# Criar pasta allure-results se não existir
if (-not (Test-Path "allure-results")) {
    New-Item -ItemType Directory -Path "allure-results" | Out-Null
}

# Crie um arquivo environment.properties consolidado
Set-Content -Path "allure-results\environment.properties" -Value @"
Browser=Chrome, Firefox, Edge
Browser.Version=120
Stand=$Stand
Sistema=Windows
Autor=Ivan Santos
Data.Execucao=$dataAtual
"@

# Criar o arquivo categories.json
Set-Content -Path "allure-results\categories.json" -Value '[
  {
    "name": "Aprovados",
    "matchedStatuses": ["passed"]
  },
  {
    "name": "Reprovados",
    "matchedStatuses": ["failed"]
  }
]'

# Criar o arquivo executor.json
Set-Content -Path "allure-results\executor.json" -Value '{
  "name": "Ivan Barros"
}'

# Criar o arquivo para configuração de etiquetas/tags
Set-Content -Path "allure-results\labels.json" -Value '{
    "labels": [
      {
        "name": "severity",
        "values": ["critical"]
      }
    ]
  }'

Write-Host "Arquivos de configuração do Allure consolidados para todos os navegadores no ambiente: $Stand"

