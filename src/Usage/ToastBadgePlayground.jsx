import ToastBadge from "../components/ui/ToastBadge/ToastBadge";

const ToastBadgePlayground = () => {
  return (
    <main className="min-h-screen space-y-10 bg-gray-50 p-8 text-gray-900">
      {/* 1. Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1. Variants</h2>
        <div className="flex flex-wrap items-center gap-3">
          <ToastBadge
            type="info"
            title={"This is title"}
            message={"This is message."}
            onClose={() => {}}
          />
        </div>
      </section>
    </main>
  );
};

export default ToastBadgePlayground;
