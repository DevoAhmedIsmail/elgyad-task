import { AttachMoney, BarChart, CreditCard, Home, InsertDriveFile, Inventory, LocalAtm, Money, People, Star } from "@mui/icons-material"

const linksData = [
  {
    label: "الرئيسية",
    href: "/",
    icon: <Home />,
  },
  {
    label: "النظام المحاسبي",
    href: "/",
    icon: <LocalAtm />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "الأقساط",
    href: "/",
    icon: <Money />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "المخزون",
    href: "/",
    icon: <Inventory />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "المبيعات",
    href: "/",
    icon: <CreditCard />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "المشتريات",
    href: "/",
    icon: <Star />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "العملاء & الموردين",
    href: "/",
    icon: <People />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "التقارير الذكية",
    href: "/",
    icon: <InsertDriveFile />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "التقارير الإحصائية",
    href: "/",
    icon: <BarChart />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  {
    label: "التقارير المالية",
    href: "/",
    icon: <AttachMoney />,
    nested: [
      {
        label: "تقارير إختيارية",
        href: "/",
      },
      {
        label: "تقارير مراكزالتكلفة",
        href: "/",
      },
      {
        label: "تقارير تكاليف المبيعات",
        href: "/",
      },
      {
        label: "تقارير السيولة النقدية",
        href: "/",
      },
      {
        label: "تقرير المصروفات",
        href: "/",
      },
      {
        label: "تقرير العملاء والموردين",
        href: "/",
      },
      {
        label: "أعمار ديون الموردين",
        href: "/",
      },
      {
        label: "أعمار ديون فواتير المشتريات",
        href: "/",
      },
      {
        label: "تقرير ديون العملاء",
        href: "/",
      },
      {
        label: "تقرير ديون فواتير العملاء",
        href: "/",
      },

    ],
  },
  
];

export default linksData;
