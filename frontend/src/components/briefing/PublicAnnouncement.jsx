import Card from "../ui/Card";

const PublicAnnouncement = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Public Announcement
      </h3>

      <div className="mt-5 rounded-xl bg-slate-800 p-5 leading-8 text-slate-300">

        Attention fans.

        Please proceed towards Gate D.

        Shuttle buses are operating every five minutes.

        Thank you for your cooperation.

      </div>

    </Card>
  );
};

export default PublicAnnouncement;