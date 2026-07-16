function simularPedido() {
    const btn = event.target;
    const originalText = btn.textContent;
    
    btn.style.transition = "all 0.3s";
    btn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⚡</span>
        Processando...
    `;
    
    setTimeout(() => {
        alert("✅ Pedido simulado!\n\nStatus: Marcado como PRONTO automaticamente em 0 segundos.\n\nEssa será a mágica da automação!");
        btn.textContent = originalText;
    }, 1500);
}