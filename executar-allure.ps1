param (
    [string]$Browser = "Chrome", # Valor padrão é Chrome se nenhum for especificado
    [string]$Stand = "Staging"   # Valor padrão é Staging se nenhum for especificado
)

# Obter a data atual no formato DD/MM/AAAA
$dataAtual = Get-Date -Format "dd/MM/yyyy"

# Criar pasta allure-results se não existir
if (-not (Test-Path "allure-results")) {
    New-Item -ItemType Directory -Path "allure-results" | Out-Null
}

# Depois crie o arquivo de propriedades do ambiente com a data atual e o navegador especificado
Set-Content -Path "allure-results\environment.properties" -Value @"
Browser=$Browser
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
  "name": "Ivan Santos"
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

Write-Host "Arquivos de configuração do Allure criados para o navegador: $Browser no ambiente: $Stand"