import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ResumeData } from "@/app/types/resume";

type ClassicResumePDFProps = {
  data: ResumeData;
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
  },
  header: { textAlign: "center", marginBottom: 20 },
  name: { fontSize: 20, fontWeight: "bold", color: "purple", marginBottom: 10 },
  contact: { fontSize: 10, marginTop: 4 },
  section: { marginTop: 12 },
  sectionTitle: { fontSize: 12, fontWeight: "bold", color: "purple", marginBottom: 4 },
  item: { marginBottom: 6 },
  listItem: { marginLeft: 12 },
});

export default function ClassicResumePDF({ data }: ClassicResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.header.name}</Text>
          <Text style={styles.contact}>{data.header.contact}</Text>
          <Text style={styles.contact}>{data.header.website}</Text>
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text>{data.summary}</Text>
        </View>

        {/* Work Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {data.workExperience.map((job, i) => (
            <View key={i} style={styles.item}>
              <Text>
                {job.title} — {job.date}
              </Text>
              {job.bullets.map((point, j) => (
                <Text key={j} style={styles.listItem}>• {point}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Education */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, i) => (
            <View key={i} style={styles.item}>
              <Text>
                {edu.title} ({edu.date})
              </Text>
              <Text>{edu.school}</Text>
              {edu.bullets.map((point, j) => (
                <Text key={j} style={styles.listItem}>• {point}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* Additional Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Information</Text>
          {data.additionalInfo.map((info, i) => (
            <Text key={i}>
              <Text style={{ fontWeight: "bold" }}>{info.label}:</Text> {info.value}
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
