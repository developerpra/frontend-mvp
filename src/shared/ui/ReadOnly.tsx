export default function ReadonlyField({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div className="flex flex-col">
      <label className="font-medium text-gray-600">{label}</label>
      <div className="border-gray-300 rounded text-sm h-9 cursor-not-allowed">
        {value ?? "-"}
      </div>
    </div>
  );
}
