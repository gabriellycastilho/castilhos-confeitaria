import { useEffect, useState } from 'react'
import axios from 'axios'

export default function TestarAPI() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:5001/produtos')
      .then(res => {
        setProdutos(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message || 'Erro desconhecido')
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Carregando produtos...</p>
  if (error) return <p style={{color: 'red'}}>Erro: {error}</p>

  return (
    <div>
      <h2>Produtos vindos da API</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado</p>
      ) : (
        produtos.map(p => (
          <div key={p.id}>
            <strong>{p.nome}</strong> - R$ {p.preco}
          </div>
        ))
      )}
    </div>
  )
}

