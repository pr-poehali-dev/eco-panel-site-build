import Icon from "@/components/ui/icon";

const posts = [
  {
    title: "Как выбрать утеплитель для сендвич-панелей",
    excerpt: "Разбираемся в преимуществах минеральной ваты, PIR-плиты и пенополиуретана для разных типов зданий",
    date: "12 февраля 2026",
    tag: "Технологии",
    readTime: "5 мин",
  },
  {
    title: "Строительство склада зимой: особенности и советы",
    excerpt: "Рассказываем, как мы возводим объекты в условиях низких температур без потери качества",
    date: "5 февраля 2026",
    tag: "Практика",
    readTime: "7 мин",
  },
  {
    title: "Энергоэффективность зданий из сендвич-панелей",
    excerpt: "Как современные панели помогают экономить до 40% на отоплении промышленных объектов",
    date: "28 января 2026",
    tag: "Экономия",
    readTime: "4 мин",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Блог</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mt-3 mb-4">
            Полезные статьи
          </h2>
          <p className="text-muted-foreground">Делимся экспертизой и рассказываем о тонкостях строительства</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-transparent hover:border-primary/20 transition-all duration-300 cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent flex items-center justify-center relative overflow-hidden">
                <Icon name="FileText" size={48} className="text-primary/20 group-hover:text-primary/40 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white text-primary text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  {post.date}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{post.tag}</span>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
