export default function InputErrorMessage({error}: {error: any}) {
  return error ? (
    <p className="mt-1 text-sm text-red-600">{error.message || 'Este campo es obligatorio'}</p>
  ) : null;
}
