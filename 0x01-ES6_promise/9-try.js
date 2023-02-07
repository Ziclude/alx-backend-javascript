export default function guardrail(mathFunction) {
    const queue = [];
    try {
	const re = mathFunction();
	queue.push(re);
    } catch (err) {
	queue.push(err.toString());
    } finally {
	queue.push('Guardrail was processed');
    }
    return queue;
}
